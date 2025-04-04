import styled from "styled-components";

const Wrapper = styled.section`
.about-us {
  padding: 10px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

.column {
  flex-direction: row;
  min-width: 250px;
}

.card {
  background: var(--background-secondary-color);
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.profile-img {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}

.card h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.car-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dotted var(--primary-500);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    gap: 15px;
}

.car-icon{
    font-size: 1.75rem;
}

.stats {
padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0; /* Optional: Adds vertical padding for spacing between rows */
}

.stat-row p {
  margin: 0;
  font-size: 14px;
}

.stat-row p:first-child {
  text-align: left;
}

.stat-row p:last-child {
  text-align: right;
}

@media (max-width: 1150px){
  .row {
    flex-direction: column; /* Stack cards vertically on small screens */
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 100%; /* Full width of the container for each card when stacked */
    margin-bottom: 10px; /* Add some margin between stacked cards */
  }

}

`;

export default Wrapper;