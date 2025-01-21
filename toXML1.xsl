<?xml version="1.0"?>
<!-- XSLT for 1.xml to another XML (toXML1.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <Summary>
            <xsl:for-each select="Cars/Car">
                <CarSummary>
                    <Model><xsl:value-of select="Model"/></Model>
                    <Price><xsl:value-of select="Price"/></Price>
                </CarSummary>
            </xsl:for-each>
        </Summary>
    </xsl:template>
</xsl:stylesheet>