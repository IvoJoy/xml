<?xml version="1.0"?>
<!-- XSLT for 1.xml to HTML (toHTML1.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head><title>Cars Data</title></head>
            <body>
                <h1>Car Information</h1>
                <table border="1">
                    <tr><th>Model</th><th>Brand</th><th>Year</th><th>Price</th><th>Color</th></tr>
                    <xsl:for-each select="Cars/Car">
                        <tr>
                            <td><xsl:value-of select="Model"/></td>
                            <td><xsl:value-of select="Brand"/></td>
                            <td><xsl:value-of select="Year"/></td>
                            <td><xsl:value-of select="Price"/></td>
                            <td><xsl:value-of select="Color"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>