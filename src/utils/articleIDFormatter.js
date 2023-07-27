//trim down the ids to make them a little better to deal with

export const articleIDFormatter = (id) => {
    if (typeof id !== 'string') {
        return 'please provide strings'
    }
    let i = id.split('/')
    return i[i.length - 1]
}

// console.log(articleIDFormatter("aaa/bbb/ccc"))