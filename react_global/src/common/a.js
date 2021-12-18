import intl from "react-intl-universal";

export const getLangauge = (path,locales,setIntlDone) => {
  return import(`${path}/locales/${locales}.json`)
  .then(res => {
    intl.init({
      currentLocale: locales,
      locales: {
        [locales]: Object.assign(intl.options.locales[locales] ? intl.options.locales[locales] : {},res)
      }
      
    })
  })
  .then(()=>setIntlDone(true))
}