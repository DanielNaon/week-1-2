const Tweeter = function(){
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        },
        {
            text: "Dani The Queen",
            id: "p3",
            comments: [
                { id: "c7", text: "First comment on first post!" },
                { id: "c8", text: "Second comment on first post!!" },
                { id: "c9", text: "Third comment on first post!!!" }
            ]
        }
    ]
    let postIdCounter = posts.length
    let commentIdCounter = 0 
    for(let post of posts){ // to check how many comments i have in every post
        commentIdCounter += post.comments.length // adding the sum of the post comments to the counter everytime
    }
    const getPosts = function(){
        return posts
    }
    const addPost = function(text){
        postIdCounter++ // counts the number of post to know how many post
        const myObj = {
            text: text,
            id: "p" + postIdCounter,
            comments: []
        }
        posts.push(myObj)
    }
    const removePost = function(postID){
        for(let post of posts){
            if(postID == post.id) {
                posts.splice($.inArray(post, posts),1)
            }
        }
    }
    const addComment = function(postID, text){
        commentIdCounter++
        const obj={
            id: "c" + commentIdCounter,
            text: text
        }
        for(let post of posts)
        {
            if(post.id == postID){
                post.comments.push(obj)
            }
        }
    }
    const removeComment = function(postID, commentID){
        for(let post of posts){
            if(post.id == postID){
                for(let comment of post.comments){ // going trought the comments section on te object
                    if(comment.id == commentID){
                        post.comments.splice($.inArray(comment, post.comments),1)
                    }
                }
            }
        }
    }
    return {
        getPosts: getPosts,
        addPost:  addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }

}



// const tweeter =Tweeter()
// let coco = tweeter.getPosts()
// console.log(coco)
// tweeter.addPost("lover")
// console.log(tweeter.getPosts())
// tweeter.removePost("p2")
// tweeter.addPost("coco")
// tweeter.addComment("p3", "Dani The Queeeeen")
// console.log(tweeter.getPosts())
// tweeter.removeComment("p1", "c1")
// console.log(tweeter.getPosts());