const collectPhotos = (modules) =>
  Object.entries(modules)
    .sort(([first], [second]) => first.localeCompare(second, 'tr', { numeric: true }))
    .map(([path, src]) => ({
      src,
      filename: path.split('/').pop(),
    }))

export const servicePhotoGroups = {
  'isitma-sogutma': collectPhotos(
    import.meta.glob('./img/isitma/*.JPG', { eager: true, import: 'default' }),
  ),
  'yangin-tesisati': collectPhotos(
    import.meta.glob('./img/yangin/*.JPG', { eager: true, import: 'default' }),
  ),
  'bakim-onarim': collectPhotos(
    import.meta.glob('./img/bakim-onarim/*.JPG', { eager: true, import: 'default' }),
  ),
  'temiz-su-tesisati': collectPhotos(
    import.meta.glob('./img/temiz-su/*.JPG', { eager: true, import: 'default' }),
  ),
}
