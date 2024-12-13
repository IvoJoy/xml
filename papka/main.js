function serializeDocument(doc) {
    const serializer = new XMLSerializer();
    const serializedDocument = serializer.serializeToString(doc);

    return vkbeautify.xml(serializedDocument);
}


/*

function serializeDocument(doc) {
    const serializer = new XMLSerializer();
    const serializedDocument = serializer.serializeToString(doc);

    // Ръчно форматиране, ако vkbeautify не работи
    const formattedXml = serializedDocument.replace(/></g, '>\n<'); // Добавяне на нов ред между елементите
    return formattedXml;
}
*/


function showGeneratedXML(content) {
    const generatedXmlHtmlElement = document.getElementById('generatedXML');
    generatedXmlHtmlElement.innerText = content;
}

function generateXML(){
    const doc = createXMLDocument();

    showGeneratedXML(serializeDocument(doc));
};
