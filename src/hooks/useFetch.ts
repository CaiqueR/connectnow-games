import { api } from 'service'
import useSWR from 'swr'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetch<Data = any, Error = any>(url: string, params?: any) {
  const { data, error, revalidate, isValidating, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, { params: { ...params } })

      return response.data
    }
  )

  return { data, error, revalidate, isValidating, mutate }
}
