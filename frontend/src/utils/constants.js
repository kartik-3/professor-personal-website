export const routerPush = (self, name) => {
  self.$router.push({ name:name }).catch(()=>{});
}

export const pageNameFromRouter = (name) => {
  switch(name) {
    case 'Teaching': return 'Teachings';
    case 'Research': return 'Research Areas';
    case 'Publication': return 'Publications';
    case 'AISocialGood': return 'AI for Social Good';
    case 'Presentation': return 'Presentations';
    default: return name
  }
}