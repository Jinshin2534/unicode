raw.split(/[\s,]+/)
   .map(token => token.replace(/^U\+/i,'').replace(/^0x/i,''))
