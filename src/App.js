import React, { Component } from 'react';
import CommentList from './CommentList';

class App extends Component {
  /**
   * props in initial state:
   *  When defining a component's initial state, avaid initializing that state with props.
   *  This is an error prone anti-pattern, since state witll only by initialed with props
   *  when the component is first created.
   *  this.state = {
   *    user: props.user
   *   }
   * In the above example, if props are ever updated, the current state will not change
   * unless the component is "refreshed." Using props to produce a component's initial
   * state also leads to duplication of data, deviating from a dependable "source of truth".
   *
   */
  state = {
    /**
     * By having a component manage its own state, any time there are changes made to
     * that state, React will know and automatically make the necessary updates to
     * the page.
     *
     * This is one of the key benefits of using React to build UI components:
     * when it comes to re-rendering the page, we just have to think about updating state.
     * We don't have to keep track of exactly which parts of the page change each time
     * there are updates. We don't need to decide how we will efficiently re-render the page.
     * React compares the previous output and new output, determines what has changed,
     * and makes these decisions for us. This process of determining what has changed
     * in the previous and new outputs is called Reconciliation.
     */
    contacts: [
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        commentValue: 'karen_isgrigg',
        email: 'karen@gmail.com',
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        commentValue: 'richardkalehoff',
        email: 'richard@gmail.com',
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        commentValue: 'tylermcginnis',
        email: 'tyler@gmail.com',
      },
    ],
  };

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
  };
  render() {
    return (
      <div>
        <CommentList
          comments={this.state.contacts}
          onDeleteComments={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
