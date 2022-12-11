import React from "react";
import "./feed.scss";
import tmdbApi from '../../api/tmdbApi';

const Feed = props => {
  // const [items, setItems] = useState([]);

  // // useEffect(() => {
  // //   const getList = async () => {
  // //     let response = null;

  // //     try {
  // //       response = await tmdbApi.getMoviesList(props.type, {params});
  // //     } catch (error) { 
        

  // //     }
  // //     setItems(response.data.results);
  // //   };
  // //   getList();
  // // }, []);

  return (
    <div class="inner-main-body">
      <div class="card">
        <div class="card-body">
          <div class="media forum-item">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              class="round-circle"
              width="50"
              alt="User"
            />
            <div class="media-body">
              <h2>
                Honest question to people upset with the movie the woman king
              </h2>
              <p class="text-secondary">
                Would you be interested in seeing a movie that includes Dahomey
                being depicted at all, or is it completely off the table for you
                because of its role in the Atlantic slave trade? Would anyone be
                interested in seeing a movie or series about Dahomey's rise in
                the early 18th century? Dahomey was a tributary of the Oyo
                empire in the treed savannah in modern day Western
                Nigeria/Eastern Benin who frequently invaded it for slaves and
                tribute, and Dahomey ended up investing heavily in Western
                firearms, artillery, and in building fortifications to resist
                them. They also attacked and conquered coastal city states to
                expand their kingdom and economic clout while expanding in the
                slave trade, and most famously, besieged Abeokuta in 1851, a
                city founded by freed Yoruba speaking slaves. There's an account
                of them successfully attacking a Portuguese fort and causing its
                bastions to collapse after sappers tunneled underneath it
                weakening it enough. If no - are there any African kingdoms or
                empires Hollywood can depict in movies and tv series that won't
                ignite a firestorm of controversy and outrage(some of it racial
                in nature) that you'd genuinely be interested in seeing?
              </p>
            </div>
            <br />
            <hr />
            <br />
            <div className="Alignment">
              <p>Created at: 13 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
