/**
 * 할 일
 * @typedef {Object} Item
 * @property {number} id ID
 * @property {string} text 내용
 * @property {boolean} isDone 완료여부
 * @property {string} category 카테고리
 * @property {string[]} [tags] 태그들 (optional)
 */

/**
 * 할 일 리스트
 */
class TodoList {
  /**
   * @param {Item[]} todoList 기존 할 일 리스트
   */
  constructor(todoList) {}

  /**
   * 할 일을 추가할 수 있다.
   * @param {Item} item 추가할 할 일
   * @throws 내용이 없으면 추가할 수 없다는 오류가 발생합니다.
   */
  add(item) {}

  /**
   * 모든 할 일을 조회할 수 있다.
   * @return {Item[]} 모든 할 일 리스트
   */
  getAll() {}

  /**
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id 조회할 할 일 ID
   * @returns {Item} id params에 매칭되는 할 일
   */
  getItem(id) {}

  /**
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * @param {number} id 수정할 할 일 ID
   * @param {Object} data
   * @param {string} data.text 수정할 할 일 내용
   * @param {boolean} data.isDone 수정할 할 일 완료여부
   * @param {string} data.category 수정할 할 일 카테고리
   * @param {string[]} [data.tags] 수정할 할 일 태그들
   */
  updateItem(id, data) {}

  /**
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {number} id 수정할 할 일 ID
   * @param {number} tagIndex 수정할 할 일 태그의 index
   * @param {string} tag 수정할 할 일 태그 내용
   */
  updateItemTags(id, tagIndex, tag) {}

  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @param {number} id 삭제할 할 일 ID
   */
  deleteItem(id) {}

  /**
   * 모든 할 일을 제거할 수 있다.
   */
  deleteAll() {}

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {number} id 삭제할 할 일 ID
   * @param {string} tag 삭제할 태그
   */
  deleteItemTag(id, tag) {}

  /**
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {number} id 삭제할 할 일 ID
   */
  deleteItemTags(id) {}
}
