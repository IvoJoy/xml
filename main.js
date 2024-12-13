function serializeDocument(doc) {
    const serializer = new XMLSerializer();
    const serializedDocument = serializer.serializeToString(doc);

    return vkbeautify.xml(serializedDocument);
}

function showGeneratedXML(content) {
    const generatedXmlHtmlElement = document.getElementById('generateXML');
    generatedXmlHtmlElement.innerText = content;
}

function generateXML(){
    const doc = createXMLDocument();

    showGeneratedXML(serializeDocument(doc));
};


