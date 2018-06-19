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
    width: 200px;
    height: 200px;
    position: absolute;
    left:40%;
}
    #main {
        position: relative;

    }
    .color{
        -webkit-appearance: none;  /* Override default CSS styles */
        appearance: none;
        display: block;
        margin: 4px;
        height: 25px; /* Specified height */
        background: none; /* Grey background */
        outline: none; /* Remove outline */
        opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
        -webkit-transition: .2s; /* 0.2 seconds transition on hover */
        transition: opacity .2s;

    }
    .color:hover{
        opacity: 1;
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