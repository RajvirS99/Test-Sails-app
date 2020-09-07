/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add:function(req, res) {
        let name = req.body.CustName;
        let phone = req.body.PhoneNumber;
        let message = req.body.CustMessage;

        Data.create({Customer_Name: name, Phone_Number: phone, Customer_Message: message}).exec(function(err){
            if(err){
                res.send(500, {err: 'Database Error'});
            }

            res.redirect('/');
        })
    },

    list:function(req,res) {
        Data.find({}).exec(function(err, data){
            if(err){
                res.send(500, 'Database Error')
            }
            res.view('read', {read:data});
        })
    },

    delete:function(req,res){
        Data.destroy({ id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database error'})
            }
            res.redirect('/read');
        })
    }
};

