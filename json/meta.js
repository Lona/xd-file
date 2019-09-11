const generateId = require('../generateId')

module.exports = docId => {
  const instanceId = generateId()
  return {
    _instruction: [
      {
        xpacket: 'begin="" id="W5M0MpCehiHzreSzNTczkc9d"',
      },
    ],
    'x:xmpmeta': {
      _attributes: {
        'xmlns:x': 'adobe:ns:meta/',
        'x:xmptk': 'Adobe XMP Core 5.6-c011 79.156380, 2014/06/19-23:40:37        ',
      },
      'rdf:RDF': {
        _attributes: {
          'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        },
        'rdf:Description': {
          _attributes: {
            'rdf:about': '',
            'xmlns:xmp': 'http://ns.adobe.com/xap/1.0/',
            'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
            'xmlns:xmpMM': 'http://ns.adobe.com/xap/1.0/mm/',
            'xmlns:stEvt': 'http://ns.adobe.com/xap/1.0/sType/ResourceEvent#',
            'xmp:CreatorTool': 'XD',
            'xmp:CreateDate': '2019-09-09T19:38:32.794+02:00',
            'xmp:ModifyDate': '2019-09-10T09:48:38.872+02:00',
            'xmp:MetadataDate': '2019-09-10T09:48:38.872+02:00',
            'dc:format': 'application/vnd.adobe.sparkler.project+dcx',
            'xmpMM:DocumentID': docId,
            'xmpMM:OriginalDocumentID': docId,
            'xmpMM:InstanceID': instanceId,
          },
          'dc:title': {
            'rdf:Alt': {
              'rdf:li': {
                _attributes: {
                  'xml:lang': 'x-default',
                },
                _text: 'test',
              },
            },
          },
          'xmpMM:History': {
            'rdf:Seq': {
              'rdf:li': [
                {
                  _attributes: {
                    'stEvt:action': 'created',
                    'stEvt:instanceID': docId,
                    'stEvt:when': '2019-09-09T19:38:32.794+02:00',
                    'stEvt:softwareAgent': 'XD',
                  },
                },
                {
                  _attributes: {
                    'stEvt:action': 'saved',
                    'stEvt:instanceID': instanceId,
                    'stEvt:when': '2019-09-10T15:17:35.966+02:00',
                    'stEvt:softwareAgent': 'XD',
                  },
                },
              ],
            },
          },
        },
      },
    },
  }
}
