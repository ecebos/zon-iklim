const collectPhotos = (modules) =>
  Object.entries(modules)
    .sort(([first], [second]) => first.localeCompare(second, 'tr', { numeric: true }))
    .map(([path, src]) => ({
      src,
      filename: path.split('/').pop(),
    }))

export const servicePhotoGroups = {
  'isitma-sogutma': collectPhotos(
    import.meta.glob('./img/isitma/*.{JPG,jpg}', { eager: true, import: 'default' }),
  ),
  'yangin-tesisati': collectPhotos(
    import.meta.glob('./img/yangin/*.{JPG,jpg}', { eager: true, import: 'default' }),
  ),
  'bakim-onarim': collectPhotos(
    import.meta.glob('./img/bakim-onarim/*.{JPG,jpg}', { eager: true, import: 'default' }),
  ),
  'temiz-su-tesisati': collectPhotos(
    import.meta.glob('./img/temiz-su/*.{JPG,jpg}', { eager: true, import: 'default' }),
  ),
}
