const myFunction = {
  fotmatCategory(category) {
    switch (category) {
      case undefined:
      case null:
      case 'all':
        return 'ทั้งหมด'
      case 'comedy':
        return 'ตลก'
      case 'thriller':
        return 'ระทึกขวัญ'
      case 'romance':
        return 'โรแมนติก'
      case 'fantasy':
        return 'แฟนตาซี'
      case 'sci-fi':
        return 'ไซไฟ'
      case 'action':
        return 'แอคชั่น'
      default:
        return category
    }
  },
}

export default myFunction
