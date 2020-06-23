var express = require("express");
var formidablemidware = require("express-formidable");
var fs = require("fs");

var app = express();
app.use(formidablemidware({
    encoding: "utf-8",
    uploadDir: "./my/dir",
    multiples: false
}));

app.post("/upload", function(req, res) {
    if (!req.files.myReport.name) {
        res.end("请先选择需要上传的文件!");
        return;
    }
    fs.rename(req.files.myReport.path, "dir\\\\" + req.files.myReport.name, function() {
        res.end("文件已经上传成功，请同时将该文件交给周老师！");
    });
    return;
});

app.listen(3000);