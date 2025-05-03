import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faBell, faTools, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #90e0ef;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PhaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  th, td {
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: left;
  }
  th {
    background: rgba(0, 180, 216, 0.2);
  }
`;

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
`;

const ToolCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const MemberCard = styled.div`
  background: linear-gradient(145deg, #00b4d8 0%, #0077b6 100%);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const CourseInfo = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(0, 180, 216, 0.1);
  border-radius: 15px;
  margin-top: 2rem;
`;

const ProjectDescription = () => {
  return (
    <Container>
      <Section>
        <Title>DevOps Monitoring & Incident Response System</Title>
        
        <Subtitle><FontAwesomeIcon icon={faChartLine} />About the Project</Subtitle>
        <p>A real-time monitoring system that automatically detects, alerts, and resolves infrastructure issues using cutting-edge DevOps tools.</p>

        <Subtitle><FontAwesomeIcon icon={faServer} />Key Features</Subtitle>
        <ul>
          {[
            "24/7 System Monitoring",
            "Automated Alerting System",
            "Self-healing Infrastructure",
            "Comprehensive Log Analysis",
            "Performance Optimization"
          ].map((item, index) => (
            <li key={index} style={{ margin: '0.5rem 0', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '5px' }}>
              {item}
            </li>
          ))}
        </ul>

        <Subtitle><FontAwesomeIcon icon={faTools} />Tech Stack</Subtitle>
        <ToolGrid>
          {[
            {name: 'Prometheus', desc: 'Metrics Collection'},
            {name: 'Grafana', desc: 'Data Visualization'},
            {name: 'ELK Stack', desc: 'Log Management'},
            {name: 'PagerDuty', desc: 'Incident Alerting'},
            {name: 'Ansible', desc: 'Automation'},
          ].map((tool, index) => (
            <ToolCard key={index}>
              <h3 style={{color: '#90e0ef'}}>{tool.name}</h3>
              <p>{tool.desc}</p>
            </ToolCard>
          ))}
        </ToolGrid>

        <Subtitle><FontAwesomeIcon icon={faBell} />Implementation Phases</Subtitle>
        <PhaseTable>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              {phase: 'Phase 1', desc: 'Dashboard Design & Log Collection'},
              {phase: 'Phase 2', desc: 'Alert Automation'},
              {phase: 'Phase 3', desc: 'Self-healing Scripts'},
              {phase: 'Phase 4', desc: 'System Testing'},
              {phase: 'Phase 5', desc: 'Reporting & Optimization'},
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.phase}</td>
                <td>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </PhaseTable>

        <Subtitle><FontAwesomeIcon icon={faUsers} />Development Team</Subtitle>
        <TeamGrid>
          {[
            {name: 'Chennupati Balaji', email: '2200031608@kluniversity.in'},
            {name: 'M N S V Ram Trinadh', email: '2200032058@kluniversity.in'},
            {name: 'Habibullah Ansari', email: '2200032527@kluniversity.in'},
            {name: 'Nereti Sai Trivedh', email: '2200031868@kluniversity.in'},
          ].map((member, index) => (
            <MemberCard key={index}>
              <h3>{member.name}</h3>
              <p>{member.email}</p>
              <p>Department of CSE</p>
              <p>KL University, AP, India</p>
            </MemberCard>
          ))}
        </TeamGrid>

        <CourseInfo>
          <h3>Term Paper Submission</h3>
          <p>Koneru Lakshmaiah Education Foundation</p>
          <p>Department of Computer Science & Engineering</p>
          <p>Academic Year 2024-2025</p>
        </CourseInfo>
      </Section>
    </Container>
  );
};

export default ProjectDescription;