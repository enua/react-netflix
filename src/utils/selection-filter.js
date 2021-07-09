const seriesGenreFilters = [
  'documentaries',
  'comedies',
  'children',
  'crime',
  'feel-good',
];

const filmsGenreFilters = [
  'drama',
  'thriller',
  'children',
  'suspense',
  'romance',
];

/**
 * Filter the items when filtername property equals filtervalue
 * @param items: Array
 * @param filterName: string
 * @param filterValue: string
 */

const filterData = (items, filterName, filterValue) => items.filter((item) => item[filterName] === filterValue);

export function selectionFilter({ series, films }) {
  return {
    series: seriesGenreFilters.map((genre) => {
      return {
        tite: genre,
        data: filterData(series, 'genre', genre),
      }
    }),
    films: filmsGenreFilters.map((genre) => {
      return {
        tite: genre,
        data: filterData(films, 'genre', genre),
      }
    }),
  }
}