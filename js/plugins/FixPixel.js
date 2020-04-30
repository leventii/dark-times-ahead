//-----------------------------------------------------------------------------
// * Remove smoothing from graphics
//-----------------------------------------------------------------------------
Graphics._centerElement = function(element) {
    var width = element.width * this._realScale;
    var height = element.height * this._realScale;
    element.style.position = 'absolute';
    element.style.margin = 'auto';
    element.style.top = 0;
    element.style.left = 0;
    element.style.right = 0;
    element.style.bottom = 0;
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    element.style["image-rendering"] = "pixelated";
    element.style["font-smooth"] = "none";
};
