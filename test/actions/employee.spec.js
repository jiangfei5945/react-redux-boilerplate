import { expect } from 'chai';
import sinon from 'sinon';
import Actions from '../../src/actions/employee';

describe('actions/employee', () => {
  describe('Action: setEmployees', () => {

    it('Should be return an action.', () => {
      const action = Actions.setEmployees([{ name: 'test' }]);
      expect(action).to.have.property('type', 'setEmployees');
    });

  });

  describe('Action: getEmployeeList', () => {
    let actions;
    let dispatchSpy;
    let xhr;
    let requests;

    beforeEach(function () {
      actions = [];
      dispatchSpy = sinon.spy(action => {
        actions.push(action);
      });

      xhr = sinon.useFakeXMLHttpRequest();
      requests = [];
      xhr.onCreate = function (xhr) {
        requests.push(xhr);
      };
    });

    afterEach(function () {
      xhr.restore();
    });

    it('Should call dispatch CHANGE_USERNAME_ERROR.', () => {
      Actions.getEmployeeList()(dispatchSpy);

      const data = { result: 1, data: [{ name: 'test1' }, { name: 'test2' }] };
      console.log(requests);
      requests[0].respond(200, { 'Content-Type': 'text/plain' }, data);

      expect(actions[0]).to.have.property('type', 'setEmployees');
      expect(actions[0]).to.have.property('data', data.data);
    });
  });

});