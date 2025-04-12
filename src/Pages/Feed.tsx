import PageWrapper from "../components/atoms/PageWrapper"
import Post from "../components/atoms/Post"
import CreatePostForm from "../components/molecules/CreatePostForm"

const Feed = () => {
    return (
        <PageWrapper>
            <CreatePostForm />
            <Post caption="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, asperiores provident assumenda sed quod saepe fuga ab soluta aut esse adipisci, impedit veritatis consequatur hic similique, autem quibusdam nam dolorem!" />
        </PageWrapper>
    )
}
export default Feed
