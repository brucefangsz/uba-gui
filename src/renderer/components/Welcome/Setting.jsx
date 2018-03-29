import React, { Component } from 'react';
import { Steps, Icon, Row, Col, Select, Form, Input, Switch } from 'antd';
import mirror, { actions, connect } from 'mirrorx';
const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;

import './Setting.less';

class Setting extends Component {
    handleSubmit = () => {

    }
    render() {
        let { initStep } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (<div className="setting-wrap">
            <Row>
                <Col span={24}>
                    <span className="new-project">创建新项目</span>
                </Col>
            </Row>
            <Row className="steps-init">
                <Col span={3}></Col>
                <Col span={18}>
                    <Steps current={initStep - 1}>
                        <Step title="设置" icon={<Icon type="setting" />} description="设置对项目的一些配置信息." />
                        <Step title="安装" icon={<Icon type="bars" />} description="处理一些安装信息等." />
                    </Steps>
                </Col>
                <Col span={3}></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form className="init-form" onSubmit={this.handleSubmit}>
                        <FormItem
                            label="项目名称"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                        >
                            {getFieldDecorator('project', {
                                rules: [{ required: true, message: '项目名称不能为空' }],
                            })(
                                <Input placeholder='请输入您的项目名' prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            )}
                        </FormItem>
                        <FormItem
                            label="存储位置"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                        >
                            {getFieldDecorator('path', {
                                rules: [{ required: true, message: '请选择本地开发目录' }]
                            })(
                                <Input disabled placeholder='请选择本地开发目录' addonAfter={<Icon onClick={this.handlerUpload} type="folder-open" />} prefix={<Icon type="setting" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            )}
                        </FormItem>
                        <FormItem
                            label="初始化依赖"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                        >
                            {getFieldDecorator('isInstall', {
                                valuePropName: 'checked'
                            })(
                                <Switch />
                            )}
                        </FormItem>
                        <FormItem
                            label="npm镜像源"
                            labelCol={{ span: 5 }}
                            wrapperCol={{ span: 15 }}
                        >
                            {getFieldDecorator('registry', {
                                rules: [{ required: true, message: '请选择npm加速镜像' }]
                            })(
                                <Select placeholder="请选择镜像源">
                                    <Option value="http://registry.npm.taobao.org">http://registry.npm.taobao.org</Option>
                                    <Option value="http://registry.npmjs.org">http://registry.npmjs.org</Option>
                                    <Option value="http://172.16.75.107:8081/repository/ynpm-group">用友内网</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </div>
        );
    }
}
// const WrappedRegistrationForm = Form.create()(Setting);

export default connect((state) => state.welcome)(Form.create()(Setting));