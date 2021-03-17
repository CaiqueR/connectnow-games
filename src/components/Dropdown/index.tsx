import { useCallback, useEffect, useRef, useState } from 'react'

import * as S from './styles'

export type Item = {
  text: string
  value: string
}
interface DropdownProps {
  openText: string
  items: Item[]
  onSelect: (selected: Item) => void
}

function Dropdown({ openText, items, onSelect }: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const wrapperRef = useRef(null)

  const handleClickOutside = useCallback(
    (event) => {
      // @ts-ignore
      if (!wrapperRef?.current?.contains(event.target) && isDropdownOpen) {
        setIsDropdownOpen(false)
      }
    },
    [isDropdownOpen]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <S.Wrapper
      ref={wrapperRef}
      onClick={() => setIsDropdownOpen((dropdownState) => !dropdownState)}
    >
      <S.Open>
        <S.Arrow>↑</S.Arrow>
        <S.OpenText>{openText}</S.OpenText>
      </S.Open>
      <S.Content isOpen={isDropdownOpen}>
        {items.map((item, index) => (
          <S.ContentItem key={index} onClick={() => onSelect(item)}>
            {item.text}
          </S.ContentItem>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
