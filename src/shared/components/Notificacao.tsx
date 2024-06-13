import './Notificacao.css';

interface Notification {
  titulo: string;
  texto: string;
}

interface MyComponentProps {
  notifications: Notification[];
}

const Notificacao: React.FC<MyComponentProps> = ({ notifications }) => {
  return (
    <div className='notifi'>
      {notifications.map((notification, index) => (
        <div key={index} className='notificacao'>
          <div className='titulo'>
            <h2>{notification.titulo}</h2>
          </div>
          <div className='texto'>
            <h2>{notification.texto}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notificacao;
