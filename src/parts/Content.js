import React from 'react';
import Line1Image from '../assets/images/Line1.png';
import Logo from '../assets/images/Logo gundar clean.png';
import VideoPlayer from '../utils/yt';
import VideoPlayer1 from '../utils/homeYt';
import { useNavigate } from 'react-router-dom';
function Content() {
  const navigate = useNavigate()
  return (
  <div>
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={logoStyle}>Selamat Datang di Dunia Quiz!</h1>
        <p style={contents}>
    Apakah Anda siap untuk petualangan belajar yang menyenangkan? Selamat datang di tempat paling seru bagi anak-anak untuk belajar sambil bermain! Dunia Quiz adalah platform interaktif yang dirancang khusus untuk meningkatkan pengetahuan, keterampilan, dan kreativitas anak-anak dengan cara yang menyenangkan.
</p>
<p style={contents}>
    Tolong menolong adalah nilai dan sikap yang sangat penting dalam kehidupan kita. Sikap tolong menolong mengajarkan kita untuk saling membantu dan mendukung sesama, tanpa memandang perbedaan atau batasan. Saat kita membantu orang lain, kita memberikan kontribusi positif pada lingkungan sekitar dan menciptakan rasa kebersamaan yang erat. Saling tolong menolong juga mengajarkan kita tentang empati, kepedulian, dan kesadaran terhadap kebutuhan orang lain
</p>
        <button style={buttonStyle} type="button" onClick={() => navigate('quiz')}>
          Mulai
        </button>

        
      </div>
      
      <div style={imageStyle}> <VideoPlayer1 /></div>
      
    </div>
    




   
    
    
    </div>
  );
}
const contents={
  color:'#fff'
}
const containerStyle = {
  marginTop: '60px',
  display: 'flex',
  justifyContent: 'space-between',
};
const divider={
  color:'#fff'
}
const logoStyle = {
  color:'#fff',
};
const Logo1 = {
marginRight:'60px',

};
const kerjaSama={
  marginTop:'60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const kerjaSama1={
  marginTop:'56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const imageStyle = {

};

const heroStyle = {
  width: '600px',
};

const buttonStyle = {
  height:'40px',
  width:'200px',
  backgroundColor: '#BB6BEA',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  marginTop:'24px'
};



export default Content;
