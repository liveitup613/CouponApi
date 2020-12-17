const db = require('./db');

class Coupon {
    static createCoupon(body) {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            conn.query(`INSERT coupons SET ?`, body, (error, rows) => {
                db().close();
                if (error) reject(error);
                else resolve(rows.insertId);
            });
        });
    }

    static getAllCoupons() {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM coupons`, (error, rows) => {
                db().close();
                if (error) reject(error);
                else resolve(rows);
            });
        });
    }

    static getCoupon(id) {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM coupons WHERE id = ${id}`, (error, rows) => {
                db().close();
                if (error) reject(error);
                else resolve(rows);
            });
        });
    }

    static validateCoupon(Code) {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM coupons WHERE Code = '${Code}'`, (error, rows) => {
                db().close();
                if (error) reject(error);
                else resolve(rows);
            });
        });
    }

    static deleteCoupon(id) {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            let query = conn.query(`Delete from  coupons WHERE id = '${id}'`, (error, rows) => {
                console.log('sql: ', query.sql);
                db().close();
                if (error) reject(error);
                else resolve(rows);
            });
        });
    }   

    static updateCoupon(id, body) {
        const conn = db().connection();

        return new Promise((resolve, reject) => {
            conn.query(`UPDATE coupons SET ? WHERE id = ${id}`, body, (error, rows) => {
                db().close();
                if (error) reject(error);
                else resolve(rows);
            });
        });
    }
}

module.exports = Coupon;