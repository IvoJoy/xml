<?xml version="1.0"?>
<!-- XSLT for 2.xml to Text (toText2.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text"/>
    <xsl:template match="/">
        <xsl:for-each select="Cars/Car">
            Model: <xsl:value-of select="Model"/> | Year: <xsl:value-of select="Year"/>
            <xsl:text>
</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>