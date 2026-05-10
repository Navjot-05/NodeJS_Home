# I make blunders of mistakes that are related to ejs and routing like

    -> in ejs , i forgets to add '<%= %>' where needed
    -> in routing i copy paste but forget about the post and instead of redirect i wrote render

    -> if using <% code %> inside any src , value or placeholder always cover it with ""




# solution to one deprecated code

    ->let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {image, name, email},{returnDocument: 'after'});

    by using returnDocument:'after' it will gets right cauz new:true is deprecated