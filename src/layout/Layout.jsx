import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from '@reach/router'
import {
  InsuranceTwoTone,
  YuqueOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { node } from 'prop-types'

import { useMediaQuery } from '../hooks/useMediaQuery'
import styles from './Layout.module.scss'

const LayoutCentribal = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { mobile, handleMobile } = useMediaQuery({ breakPoint: 600 })

  const { Header, Sider, Content, Footer } = Layout
  const { Item } = Menu

  const toggle = () => setCollapsed(!collapsed)

  useEffect(() => {
    window.addEventListener('resize', handleMobile)
    return () => window.removeEventListener('resize', handleMobile)
  }, [handleMobile])

  return (
    <Layout className={styles.layout}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        className={styles.sidebar}
      >
        <Link to="/" style={{ backgroundColor: 'white' }}>
          <div className={styles.logo} />
        </Link>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          className={styles.sidebar}
        >
          <Item
            key="1"
            icon={<InsuranceTwoTone style={{ fontSize: '18px' }} />}
          >
            <Link to="/all-heroes" style={{ fontSize: '18px' }}>
              Listado de heroes
            </Link>
          </Item>
          <Item key="2" icon={<YuqueOutlined style={{ fontSize: '18px' }} />}>
            <Link to="/all-heroes-fly" style={{ fontSize: '18px' }}>
              Heroes que vuelan
            </Link>
          </Item>
        </Menu>
      </Sider>
      <Layout className={`${styles.site_layout} site-layout`}>
        <Header className={styles.site_layout_header} style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
          ) : (
            <MenuFoldOutlined className={styles.trigger} onClick={toggle} />
          )}
          <div className={styles.top_menu}>
            <Link to="/">
              <h1 >SUPERHEROS APP</h1>
            </Link>
          </div>
        </Header>
        <Content className={styles.site_layout_content}>{children}</Content>
        <Footer className={styles.ant_layout_footer}>
          Centribal @ {new Date().getFullYear()}. Todos Los Derechos Reservados.
        </Footer>
      </Layout>
    </Layout>
  )
}

LayoutCentribal.propTypes = {
  children: node.isRequired,
}

export default LayoutCentribal
