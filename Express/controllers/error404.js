exports.get404 = (req, res, next)=>{    //We can remove the path too, as it is the default.
    res.status(404).render('404',{title:'Page not found'})
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))    //We can chain the send method with status,setHeader,etc...
}