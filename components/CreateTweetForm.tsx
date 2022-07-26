import { Button, message } from "antd"
import { mutate } from "swr"
import { fetcher } from "./util/fetcher"
import { useState } from "react"
import { useFeed,  useMe} from "./util/hooks"

export const CreateTweetForm = () => {
  const [input, setInput] = useState("")
  const { feed } = useFeed()
  const {me} = useMe()
  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={async e => {
        e.preventDefault()

        // we include "false" here to ask SWR not to revalidate the cache with
        // the feed returned from the server. we'll remove this after the next section
        mutate("/api/feed", [{ text: input, author: me }, ...feed], false)
        fetcher("/api/tweet/create", {
          text: input,
        })
        setInput("")
      }}
    >
      <input value={input} onChange={e => setInput(e.target.value)} />
      <Button htmlType="submit">Tweet</Button>
    </form>
  )
}