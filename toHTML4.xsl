<?xml version="1.0"?>
<!-- XSLT for 4.xml to HTML (toHTML4.xsl) -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head><title>Автомобили Данни</title></head>
            <body>
                <h1>Информация за Автомобили</h1>
                <table border="1">
                    <tr><th>Модел</th><th>Марка</th><th>Година</th><th>Цена</th><th>Цвят</th><th>Метод</th><th>Продължителност</th></tr>
                    <xsl:for-each select="Автомобили/Автомобил">
                        <tr>
                            <td><xsl:value-of select="Модел"/></td>
                            <td><xsl:value-of select="Марка"/></td>
                            <td><xsl:value-of select="Година"/></td>
                            <td><xsl:value-of select="Цена"/></td>
                            <td><xsl:value-of select="Цвят"/></td>
                            <td><xsl:value-of select=\"../Транспорт/Метод\"/></td>
                            <td><xsl:value-of select=\"../Транспорт/Продължителност\"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>