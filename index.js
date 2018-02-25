module.exports = function minimalSvgstoreLoader(source, map, meta) {
    return `/* __minimal_svgstore_loader__path=${this.resource} */`;
};