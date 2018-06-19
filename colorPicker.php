<html>
<head>
<title>Color Picker</title>
<style>
#color {
    width: 200px;
    height: 200px;
    background-color: green;
}
</style>

</head>
<body>
<form>
    <input oninput="slide.getValue('r')" min="0" max="255" id="r" type="range">
    <input oninput="slide.getValue('b')" min="0" max="255" id="b" type="range">
    <input oninput="slide.getValue('g')" min="0" max="255" id="g" type="range">
    <input oninput="slide.getValue('r')" min="0.1" max="1" step="0.1" id="a" type="range">
</form>
<div onmousemove= "box.get(event)" id="color"></div>
<script src="script.js"></script>
</body>
</html>