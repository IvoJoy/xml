<?xml version="1.0"?>
<!-- XSLT for 3.xml to Text (toText3.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text"/>
    <xsl:template match="/">
        <xsl:for-each select="Автомобили/Автомобил">
            Марка: <xsl:value-of select="Марка"/> | Цена: <xsl:value-of select="Цена"/>
            <xsl:text>
</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>