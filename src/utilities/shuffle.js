const shuffle = () => {
    const assets = [
        {image:'/assets/aws.png'},
        {image:'/assets/firebase.png'},
        {image:'/assets/javascript.png'},
        {image:'/assets/mongodb.png'},
        {image:'/assets/next.png'},
        {image:'/assets/node.png'},
        {image:'/assets/postgresql.png'},
        {image:'/assets/react.png'},
    ];

    return [...assets,...assets]
    .sort(()=>Math.random() - 0.5)
    .map((card) => ({...card,id:Math.random()}))
};

export default shuffle;