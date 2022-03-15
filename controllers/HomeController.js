const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Report = require('../models/report');

class HomeController {
    async CreateMarket(req, res) {
        const { reportDetails } = req.body;
        if (!reportDetails.userID || !reportDetails.marketID || !reportDetails.marketName || !reportDetails.cmdtyID || !reportDetails.marketType || !reportDetails.cmdtyName || !reportDetails.priceUnit || !reportDetails.convFctr || !reportDetails.price) {
            return res.status(400).json({ message: 'Send All Details Please' });
        }
        try {
            const dataExists = await Report.findOne({ marketID: reportDetails.marketID, cmdtyID: reportDetails.cmdtyID });
            if (dataExists !== null && dataExists !== undefined) {
                if (dataExists.cmdtyName !== reportDetails.cmdtyName) {
                    return res.status(400).json({ message: 'No Such Cmdty Exi' });
                }
                else {
                    await dataExists.userID.push(reportDetails.userID);
                    const iop = dataExists.truePrice + (reportDetails.price / reportDetails.convFctr);
                    const lgn = dataExists.userID.length;
                    dataExists.truePrice = iop;
                    dataExists.finalPrice = iop / lgn;
                    await dataExists.save().then((Data) => {
                        return res.status(200).json({ status: "success", reportID: `${dataExists.reportId}` });
                    }).catch(err => {
                        console.log(err);
                        return res.status(400).json({ message: 'No Such Cmdty Exi' })
                    });
                }
            } else {
                const id = uuidv4();
                const newReport = new Report({
                    reportId: id,
                    userID: reportDetails.userID,
                    marketID: reportDetails.marketID,
                    marketName: reportDetails.marketName,
                    cmdtyID: reportDetails.cmdtyID,
                    marketType: reportDetails.marketType,
                    cmdtyName: reportDetails.cmdtyName,
                    truePrice: reportDetails.price / reportDetails.convFctr,
                    finalPrice: reportDetails.price / reportDetails.convFctr,
                    trueUnit: "Kg",
                    priceUnit: reportDetails.priceUnit,
                    convFctr: reportDetails.convFctr,
                    price: reportDetails.price,
                });
                try {
                    const Rprt = await newReport.save().then((response) => {
                        return res.status(200).json({ status: "success", reportID: `${id}` });
                    }).catch(err => {
                        console.log(err);
                        return res.status(500).json({ message: "Internal Server Error, Sorry" });
                    });
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Internal Server Error, Sorry" });
                }
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error, Sorry" });
        }

    }
    async GetAggregetedReport(req, res) {
        const id = req.query.reportID;
        try {
            const report = await Report.findOne({ reportId: `${id}` });
            if (!report) {
                return res.status(400).json({ message: "Dont Exists such report!!" });
            }
            console.log(report);
            return res.status(200).json({
                _id: report.reportId,
                cmdtyName: report.cmdtyName,
                cmdtyID: report.cmdtyID,
                marketID: report.marketID,
                marketType: report.marketName,
                users: report.userID,
                timestamps: { createdAt: report.createdAt, updatedAt: report.updatedAt },
                priceUnit: "Kg",
                price: report.finalPrice
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error , Sorry! Try after some time' });
        }
    }
}
module.exports = new HomeController();