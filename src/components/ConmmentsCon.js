import React from 'react'

const commentData= [

    {
        name: "Parteek",
        text: "Lorem ipsum dollar sit amet, consectetur",
        replies: [
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    {
                        name: "Parteek",
                        text: "Lorem ipsum dollar sit amet, consectetur",
                        replies: [
                            {
                                name: "Parteek",
                                text: "Lorem ipsum dollar sit amet, consectetur",
                                replies: [
                                  
                                    {
                                        name: "Parteek",
                                        text: "Lorem ipsum dollar sit amet, consectetur",
                                        replies: [
                                            
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        name: "Parteek",
                        text: "Lorem ipsum dollar sit amet, consectetur",
                        replies: [
                            
                        ]
                    },
                    
                    
                ]
            },
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
        ]
    },
    {
        name: "Parteek",
        text: "Lorem ipsum dollar sit amet, consectetur",
        replies: [
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
    
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
    
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                ]
            },
            
            
        ]
    },
    
    {
        name: "Parteek",
        text: "Lorem ipsum dollar sit amet, consectetur",
        replies: [
            
        ]
    },
    
    {
        name: "Parteek",
        text: "Lorem ipsum dollar sit amet, consectetur",
        replies: [
            
        ]
    },
    
    {
        name: "Parteek",
        text: "Lorem ipsum dollar sit amet, consectetur",
        replies: [
            {
                name: "Parteek",
                text: "Lorem ipsum dollar sit amet, consectetur",
                replies: [
                    
                                    
                ]
            },
            
        ]
    },
    
]  

const Comment= ({data})=>{
    const {name, text, replies} = data;

    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>

            <img className='w-12 h-12'
            alt="user" 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            ></img>

            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList= ({comments})=>{

    //Don't use indexes as the keys.


    // We will try to use the N-LEVEL DEEP COMMENTS! 
    // Like the reddit comments section used to be!

    // What are replies? Comments list are just a list of replies so
    // we can use them again and again for the further replies.
    return comments.map((comment,index)=>(

                <div>
                 <Comment key={index}  data={comment} />
                 <div className='pl-5 border border-l-black ml-5'>
                 
                 <CommentsList comments= {comment.replies}/>
                 </div>
                 </div>
    ));
        
    
}

const ConmmentsCon = () => {
  return (
    <div className='m-5 p-2'>

    <h1 className='text-2xl font-bold'> Comments </h1>
   <CommentsList comments={commentData} />
    </div>
  )
}

export default ConmmentsCon



