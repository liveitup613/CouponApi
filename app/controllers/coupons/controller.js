
const Coupon = require('../../models/Coupon');

const generateCoupon = async (req, res) => {
    let body = req.body;

    try {
        let insertId = await Coupon.createCoupon(body);
        
        if (insertId != 0)
            res.status(201).json({
                "insertID" : insertId
            });
        else   
            res.status(500).jon("database Error");
    } catch (error) {
        console.log('createUser -------> ', error);

        res.status(500).json(error.toString());
    }
}

const validateCoupon = async (req, res) => {
    const body = req.body;

    try {        
        let data = await Coupon.validateCoupon(body.Code);
        console.log("coupon data : ", data);

        if (data != null) {            
            let coupon_data = data[0];
            if (coupon_data.Type == "One-Time")
                await Coupon.deleteCoupon(coupon_data.ID);
            res.status(200).json({
                amount: coupon_data.Amount
            });            
        }      
        else {
            res.status(401).json();
        }  
    }
    catch (error) {
        res.status(500).json(error.toString());
    }
    
}

const getAllCoupons = async (req, res) => {
    try {
        // let users = await User.getUsers();

       
        let result = await Coupon.getAllCoupons();

        res.status(200).json({
            data: result
        });
    } catch (error) {
        console.log('getUsers --------> ', error);
        res.status(500).json(error.toString());
    }
}


const getCoupon = async (req, res) => {
    let id = req.params.id;

    try {
        let result = await Coupon.getCoupon(id);

        res.status(200).json({
            data: result
        });
    } catch (error) {
        console.log('getCoupon ---------> ', error);

        res.status(500).json({
            body: error.toString()
        });
    }
}

const deleteCoupon = async (req, res) => {
    let id = req.params.id;

    try {
        let result = await Coupon.deleteCoupon(id);
        console.log('deleteCoupon result --------> ', result);

        res.status(204).end();
    } catch (error) {
        console.log('deleteCoupon -------> ', error);

        res.status(500).json(error.toString());
    }
}

const updateCoupon = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log('updateCoupon -------> ', body);

    try {
        await Coupon.updateCoupon(id, body);

        res.status(204).json({});
    } catch (error) {
        console.log('updateCoupon -------> ', error);

        res.status(500).json({
            body: error.toString()
        });
    }
}

module.exports = {
    generateCoupon,
    validateCoupon,
    getCoupon,
    getAllCoupons,
    deleteCoupon,
    updateCoupon   
}