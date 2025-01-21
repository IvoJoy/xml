<?xml version="1.0"?>
<!-- XSLT for 2.xml to another XML (toXML2.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <Details>
            <xsl:for-each select="Cars/Car">
                <Car>
                    <Brand><xsl:value-of select="Brand"/></Brand>
                    <Stock><xsl:value-of select="@Stock"/></Stock>
                </Car>
            </xsl:for-each>
        </Details>
    </xsl:template>
</xsl:stylesheet>
