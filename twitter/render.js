const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").children().remove()
        for(let post of posts){
            let newComments = ``
            for (let comment of post.comments){
                newComments += `<div data-id=${comment.id}>${comment.text}</div>`
            }
            const newPost = `<div data-id=${post.id} class=post><div class=post-text>${post.text}</div><div class=comments>${newComments}</div></div>`
            $("#posts").append(newPost)
        }
    }

    return {
        renderPosts: renderPosts
    }
}
const twitter = Tweeter()
const render = Renderer()
render.renderPosts(twitter.getPosts())

