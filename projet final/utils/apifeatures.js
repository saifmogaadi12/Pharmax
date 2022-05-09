class Apifeatures {
    constructor (query,queryStr)
    {
        this.query = query
        this.queryStr=queryStr
    }
    search()
    {
        const keybord = this.queryStr.keyword?  { //si this.queryStr.keyword existe
            nom: {
                $regex: this.queryStr.keyword,
                $options:"i"
            }
        }:{} //dans le cas contraire keybord prend l'objet vide({})
        this.query = this.query.find({...keybord}) //keybord prend la valeur de l'objet avec nom
        return this  //nouveau paramètres à la fonction find lui passé valeur de nom que j'ai défini dans l'objet
    }
}
module.exports = Apifeatures 

