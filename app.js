var express = require("express");
var formidablemidware = require("express-formidable");
var fs = require("fs");
var sillydt = require("silly-datetime");

var app = express();
app.use(formidablemidware({
    encoding: "utf-8",
    uploadDir: "./my/dir",
    multiples: false
}));

app.use("/", express.static("public"));

app.post("/upload", function(req, res) {
    res.set('Content-Type', 'text/html;charset=UTF-8');
    if (!req.files.myReport.name) {
        res.end("请先选择需要上传的文件!");
        return;
    }
    if (!req.fields.myName) {
        res.end("请先输入你的名字！");
        return;
    }
    console.log(req.files.myReport.path);
    fs.rename(req.files.myReport.path, "./my/dir\\\\" + req.fields.myName + "_" + req.files.myReport.name, function() {
        res.end("文件上传成功，请同时将此文件上交给周老师！");
        console.log(req.fields.myName + " uploaded file <" + req.files.myReport.name + "> at time: " + sillydt.format(new Date(), 'YYYY-MM-DD HH:mm'));
    });
    return;
});

app.listen(3000);
console.log("Web start to run on port: 3000");