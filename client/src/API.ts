import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3001"

export const getData = async (): Promise<AxiosResponse> => {
  try {
    const todos: AxiosResponse = await axios.get(
      baseUrl
    )
    return todos
  } catch (error) {
    if (axios.isAxiosError(error)) {

    throw error;
  } else {

    throw new Error('Something went wrong.');
  }
  }
}
