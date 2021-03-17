import Dropdown, { Item } from 'components/Dropdown'
import Spinner from 'components/Spinner'
import { useFetch } from 'hooks/useFetch'
import { useCallback, useRef, useState } from 'react'
import Base from 'templates/Base'
import { transformDate } from 'utils/date'
import { getKeyValue } from 'utils/helpers'

import * as S from './styles'

type Game = {
  first_release_date: number
  id: number
  name: string
  rating: number
  summary: string
}

function Games() {
  const { data: games } = useFetch<Game[]>('/')
  const [page, setPage] = useState(0)

  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const scoreRef = useRef<HTMLInputElement>(null)

  const [selectedOrder, setSelectOrder] = useState<Item>({
    text: 'Select a order',
    value: ''
  })

  const handleClear = useCallback(() => {
    if (nameRef?.current && scoreRef?.current) {
      nameRef.current.value = ''
      scoreRef.current.value = ''
    }
    setName('')
    setScore('')
    setSelectOrder({ text: 'Select a order', value: '' })
  }, [])

  const handleSelectDropdownItem = useCallback((order: Item) => {
    setSelectOrder(order)
  }, [])

  const handleLoadMoreGames = useCallback(() => {
    setPage((currentPage) => currentPage + 5)
  }, [])

  return (
    <Base>
      <S.Wrapper>
        <S.Card>
          <S.CardTitle>Filter Results</S.CardTitle>

          <S.Label>Name (contains)</S.Label>
          <S.Input
            ref={nameRef}
            placeholder="Text string"
            onChange={(e) => setName(e.target.value)}
          />

          <S.FiltersContainer>
            <S.Col>
              <S.Label>Minimum Score</S.Label>
              <S.Input
                ref={scoreRef}
                placeholder="1 - 10"
                onChange={(e) => setScore(e.target.value)}
              />
            </S.Col>

            <S.Col>
              <S.Label>Order by</S.Label>
              <Dropdown
                openText={selectedOrder.text}
                items={[
                  { text: 'Release Date', value: 'first_release_date' },
                  { text: 'Score', value: 'rating' },
                  { text: 'Name', value: 'name' }
                ]}
                onSelect={handleSelectDropdownItem}
              />
            </S.Col>

            <S.CardButton onClick={handleClear}>Clear</S.CardButton>
          </S.FiltersContainer>
        </S.Card>

        {games ? (
          <S.GameList>
            {games
              .filter((game) => {
                const gameCompare = game.name
                  .toLowerCase()
                  .includes(name.toLowerCase())
                const scoreCompare =
                  parseInt(
                    (Math.round(game.rating) * 0.1).toFixed(1).split('.')[0]
                  ) === parseInt(score)
                if (score && name) {
                  return gameCompare && scoreCompare
                }
                if (score) {
                  return scoreCompare
                }
                return gameCompare
              })
              // @ts-ignore
              .sort((a, b) => {
                if (selectedOrder.text !== 'Select a order') {
                  const valueA = getKeyValue(selectedOrder.value)(a)
                  const valueB = getKeyValue(selectedOrder.value)(b)

                  if (valueA < valueB) {
                    return -1
                  }
                  if (valueA > valueB) {
                    return 1
                  }
                  return 0
                }
              })
              .slice(0, page + 5)
              .map((game) => (
                <S.GameItem key={game.id}>
                  <S.Image />
                  <S.GameDetail>
                    <S.GameTitle>{game.name}</S.GameTitle>
                    <S.GameReleaseDate>
                      Release Date: {transformDate(game.first_release_date)}
                    </S.GameReleaseDate>
                    <S.GameAbout>{game.summary}</S.GameAbout>
                  </S.GameDetail>
                  <S.GameRating>
                    <S.Rating>
                      {Number.isInteger(Math.round(game.rating) * 0.1)
                        ? Math.round(game.rating) * 0.1
                        : (Math.round(game.rating) * 0.1).toFixed(1)}
                    </S.Rating>
                  </S.GameRating>
                </S.GameItem>
              ))}
            <S.LoadMore onClick={handleLoadMoreGames}>Load more</S.LoadMore>
          </S.GameList>
        ) : (
          <div>
            <S.LoadingContainer>
              <Spinner color="white" size="medium" />
              Loading game list...
            </S.LoadingContainer>
          </div>
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Games
