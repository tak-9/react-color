
module.exports = function (app) {

    // Generate array of HTML HEX color codes 
    app.get("/api/color", function (req, res) {
        //console.log("GET /api/color")

        let oneColor = [];
        for (let i=0; i<32; i++){
            let hex = (i*8).toString(16);
            // hex must be two digit, add 0 (ie., 01, 02, ... , 0e, 0f)
            if (hex.length === 1) {
                hex = '0' + hex;
            }
            oneColor.push(hex);
        }
        //console.log(oneColor);
    
        let color = [];
        for (let i=0; i<oneColor.length; i++) {
            for (let j=0; j<oneColor.length; j++){
                for (let k=0; k<oneColor.length; k++){
                    color.push(`#${oneColor[k]}${oneColor[i]}${oneColor[j]}`)
                }
            }
        }
        //console.log(color);

        res.json({color: color});
    });

}