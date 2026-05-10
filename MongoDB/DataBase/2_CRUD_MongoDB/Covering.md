# MongoDB 
    -> installation
    -> connection
    -> schema
    -> model
    -> crud
# It's just making data using 
    ->Routes



# Notes
    -> _id and _v in the browser we get json file like format in this these both are present 



    -> _id helps in ease of finding the thing using it's id (it's a unique identifier)



    -> _v is the internal version to prevent conflicting in advanced scalable projects

        _id = "662773 c5c0becb87fa020cc9"
        here first 6 numbers in it are timestamps from 6 to space given to it
        and the rest is the machine os related things 






        
    -> difference between findOneAndUpdate and find({property}) is that the findOneAndUpdate gives null if that user or property doesnot exits while the find({property}) gives a blank array if not found any ,if found will provide the first one fulfilling the criteria







# this is the code to use for finding and updating it's value with respect to it's data
    -> app.get('/', async (req, res)  => {
            let updateduser = await userModel.findOneAndUpdate(thing to be found, changedthing:to, {returnDocument:'after'})
        })



# use ctl+v to preview the .md files