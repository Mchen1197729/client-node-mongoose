import ajax from './ajax'

//1.add one cat to database
export const catAddOne = ({name, age, hobby}) => {
  return ajax('cat/add', 'post', {name, age, hobby})
}

//2.search one cat that matches most
export const catSearchOne = ({name, age, hobby}) => {
  return ajax('cat/search', 'post', {name, age, hobby})
}

//3.get all cats in the database
export const catGetAll = () => {
  return ajax('cat/all', 'get')
}

//4.get one cat according to some params
export const catGetOne = (params) => {
  return ajax('cat/one', 'get', params)
}

//5.delete one from database
export const catDeleteOne = (data) => {
  return ajax('cat/one', 'delete', data)
}
