<html>
<head>
<title>Color Picker</title>
<style>
    body{
        background-image: url("wall.jpg");
        background-size: 100% 100%;
        background-attachment: fixed;
    }
#color {
    max-width: 400px;
    width: 50%;
    height: 100%;
    max-height: 400px;
    position: absolute;
    border-radius: 40%;
    left: 0;
    right: 0;
    margin: auto
}
    #main {
        position: relative;
        width: 100%;
        height: 100%;

    }
    .color {
        -webkit-appearance: none;
        height: 15px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .color:hover {
        opacity: 1;
    }

    .color::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: cyan;
        cursor: pointer;
    }


    .color::-moz-range-thumb {
        width: 30px;
        height: 30px;
        background-color: cyan;
        border: none;
        border-radius: 40%;
        cursor: pointer;
    }
    .color:nth-last-child(4)::-moz-range-thumb  {
        background-color: red;
    }
    .color:nth-last-child(4)::-webkit-slider-thumb{
        background-color:red;
    }
    .color:nth-last-child(3)::-webkit-slider-thumb{
        background-color:green;
    }

    .color:nth-last-child(2)::-webkit-slider-thumb{
        background-color:blue;
    }

    .color:nth-last-child(3)::-moz-range-thumb {
        background-color: green;
    }

    .color:nth-last-child(2)::-moz-range-thumb {
        background-color: blue;
    }

</style>

</head>
<body>
<div id="main">
<form id="color_container">
</form>
<div id="color"></div>
</div>
<script src="script.js"></script>
</body>
</html>