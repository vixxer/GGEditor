import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import EditorContextMenu from '../../components/EditorContextMenu';
import EditorToolbar from '../../components/EditorToolbar';
import EditorItemPanel from '../../components/EditorItemPanel';
import EditorDetailPanel from '../../components/EditorDetailPanel';
import styles from './index.scss';

class FlowPage extends React.Component {
  renderFlow() {
    return (
      <Flow className={styles.flow} />
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <EditorToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <EditorItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderFlow()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <EditorDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <EditorContextMenu />
      </GGEditor>
    );
  }
}

export default FlowPage;
